// New Age
if (Platform.isLoaded("create_new_age")) {
    // Sequence assembly items
    StartupEvents.registry("item", e => {
        e.create("incomplete_electrical_connector", "create:sequenced_assembly").texture("create_new_age:electrical_connector").displayName("Incomplete Electrical Connector")
	e.create("incomplete_redstone_magnet", "create:sequenced_assembly").texture("create_new_age:magnetite_block").displayName("Incomplete Redstone Magnet")
	e.create("incomplete_layered_magnet", "create:sequenced_assembly").texture("create_new_age:redstone_magnet").displayName("Incomplete Layered Magnet")
	e.create("incomplete_fluxuated_magnetite", "create:sequenced_assembly").texture("create_new_age:layered_magnet").displayName("Incomplete Fluxuated Magnetite")
	e.create("incomplete_netherite_magnet", "create:sequenced_assembly").texture("create_new_age:fluxuated_magnetite").displayName("Incomplete Netherite Magnet")
	e.create("incomplete_reactor_rod", "create:sequenced_assembly").texture("create_new_age:reactor_rod").displayName("Incomplete Reactor Rod")
    })
}
