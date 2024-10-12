export class EnumHelper {
    public static length<T extends Record<string, unknown>>(enumType: T): number {
    return Object.keys(enumType).length;
  }
}
