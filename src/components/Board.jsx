import { BoardLogin } from "./BoadLogin"
import { BoadChoose } from "./BoardChoose"
import { BoadNewSession } from "./BoardNewSession"

export function Board () {
    return (
        <section className="board">
            <BoardLogin />
            <BoadNewSession />
            <BoadChoose />
        </section>
    )
}