import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions component',()=>{

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions,{
            props:{
                pokemons
            }
        })
    })

    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe mostrar las 4 opciones correctamente', () => {

        // se valida que los li deben ser 4 elementos
        const li = wrapper.findAll('li');
        expect( li.length ).toBe(4);

        // se validan que cada uno de los li tengan un nombre
        expect( li[0].text() ).toBe('bulbasaur')
        expect( li[1].text() ).toBe('ivysaur')
        expect( li[2].text() ).toBe('venusaur')
        expect( li[3].text() ).toBe('charmander')
        
    })

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        console.log(wrapper.emitted('selectionPokemon'))

        // se emite el evento una vez
        expect(wrapper.emitted('selectionPokemon').length).toBe(4)

        // se emite con el argumento esperado
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1])

    })
})