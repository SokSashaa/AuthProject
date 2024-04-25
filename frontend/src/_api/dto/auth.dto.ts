export type LoginFormDto = {
    email: string,
    password: string
}

export type LoginResponseDto = {
    token: string
}

export type RegisterFormDTO = LoginFormDto & {
    first_name: string,
    second_name: string,
    login: string,
    password: string,
    gender: string,
    date_reg:Date,
}
export type RegisterResponseDTO = RegisterFormDTO

export type User = Omit<RegisterFormDTO, 'password'> & {
    id: number,
}