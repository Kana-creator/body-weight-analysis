const CheckEmptyField = (
  input: HTMLInputElement,
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const container = input.parentElement;
  const small = (container?.querySelector("small") as HTMLElement) || null;

  if (input.value.length < 1) {
    input.classList.add("empty");
    small.innerText = `Required field`;
    setEmpty(true);
  } else {
    input.classList.remove("empty");
    small.innerText = ".";
    setEmpty(false);
  }
};

export default CheckEmptyField;
