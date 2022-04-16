class Storage {
  VARIANTS_STORAGE = {
    local: localStorage,
    session: sessionStorage,
  };

  defaultValue = null;

  constructor(key, storage = "local", value = this.defaultValue) {
    this.key = key;
    this.storage = this.VARIANTS_STORAGE[storage] ?? alert("Ввведи local или session");
    this.set(value);
  }

  get = () => {
    this.value = JSON.parse(this.storage.getItem(this.key));
    return this.value;
  };

  set = (value) => {
    this.value = JSON.stringify(value);
    this.storage.setItem(this.key, this.value);
  };

  clear = () => this.set(null);

  isEmpty = () => !this.get();
}

const names = new Storage("names", "session", "31231");
const secondNames = new Storage("second", "session");
names.set({
  sadf: 123,
  sadfas: true,
});

console.log(names.get("names"));
secondNames.set("31231");
names.clear();
console.log(names.isEmpty());
