// New Age
if (Platform.isLoaded("create_new_age")) {
    // Sequence assembly items
    StartupEvents.registry("item", e => {
        e.create("incomplete_electrical_connector", "create:sequenced_assembly").texture("create_new_age:item/electrical_connector").displayName("Incomplete Electrical Connector").modelJson({parent: 'create_new_age:item/electrical_connector'})
	e.create("incomplete_redstone_magnet", "create:sequenced_assembly").texture("create_new_age:item/magnetite_block").displayName("Incomplete Redstone Magnet").modelJson({parent: 'create_new_age:item/magnetite_block'})
	e.create("incomplete_layered_magnet", "create:sequenced_assembly").texture("create_new_age:item/redstone_magnet").displayName("Incomplete Layered Magnet").modelJson({parent: 'create_new_age:item/redstone_magnet'})
	e.create("incomplete_fluxuated_magnetite", "create:sequenced_assembly").texture("create_new_age:item/layered_magnet").displayName("Incomplete Fluxuated Magnetite").modelJson({parent: 'create_new_age:item/layered_magnet'})
	e.create("incomplete_netherite_magnet", "create:sequenced_assembly").texture("create_new_age:item/fluxuated_magnetite").displayName("Incomplete Netherite Magnet").modelJson({parent: 'create_new_age:item/fluxuated_magnetite'})
	e.create("incomplete_reactor_rod", "create:sequenced_assembly").texture("create_new_age:item/reactor_rod").displayName("Incomplete Reactor Rod").modelJson({parent: 'create_new_age:item/reactor_rod'})
    })
})
