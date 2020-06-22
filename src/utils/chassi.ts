/**
 *
 * This class is an adaptation of the following link:
 * https://respostas.guj.com.br/41944-validar-chassi-chassi-sempre-invalido
 */
export class Chassi {
  public static isValid(chassi: string) {
    if (chassi.trim().length != 17) {
      return false
    }

    const zeroNoPrimeiroDigito: RegExp = /^0/
    const matcherZero: boolean = zeroNoPrimeiroDigito.test(chassi)

    const matcherEspaco: boolean = chassi.includes(' ')

    const repeticaoMaisDe6Vezes: RegExp = /^.{4,}([0-9A-Z])\\1{5,}/
    const matcherRepetir: boolean = repeticaoMaisDe6Vezes.test(chassi)

    const caracteresiIoOqQ: RegExp = /[iIoOqQ]/
    const matcherCaract: boolean = caracteresiIoOqQ.test(chassi)

    const ultimos6Numericos: RegExp = /[0-9]{6}$/
    const matcherUltimos: boolean = !ultimos6Numericos.test(chassi)

    return !(
      matcherZero ||
      matcherEspaco ||
      matcherRepetir ||
      matcherCaract ||
      matcherUltimos
    )
  }
}
