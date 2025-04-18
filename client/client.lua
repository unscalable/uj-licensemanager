local QBCore = exports['qb-core']:GetCoreObject()

RegisterCommand("managelicense", function()
    lib.callback('uj_licensemanager:canUseCommand', false, function(allowed)
        if allowed then
            SetNuiFocus(true, true)
            SendNUIMessage({ action = "openUI" })

            -- Request license types from the server to populate the form
            TriggerServerEvent('uj_licensemanager:getLicenseTypes')
        else
            lib.notify({
                title = "UJ License Manager",
                description = "You do not have permission to use this.",
                type = "error"
            })
        end
    end)
end)

RegisterNetEvent("uj_licensemanager:openUI", function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "openUI" })

    -- Request license types from the server to populate the form
    TriggerServerEvent('uj_licensemanager:getLicenseTypes')
end)

RegisterNUICallback("closeUI", function(_, cb)
    SetNuiFocus(false, false)
    cb({})
end)

RegisterNUICallback("submitForm", function(data, cb)
    if data and data.playerId and data.licenseType and data.action then
        TriggerServerEvent("uj_licensemanager:updateLicense", data.playerId, data.licenseType, data.action)
        SetNuiFocus(false, false)
    else
        print("Error: Invalid form data.")
    end
    cb({})
end)

-- Handling the server response to populate license types
RegisterNetEvent("uj_licensemanager:setLicenseTypes", function(licenseTypes)
    SendNUIMessage({
        action = "setLicenseTypes",
        licenseTypes = licenseTypes
    })
end)
