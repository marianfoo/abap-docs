  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

conflict switch

A special [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") for [conflict resolution](javascript:call_link\('abenconflict_resolution_glosry.htm'\) "Glossary Entry"). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: on if all assigned switches are on, off if at least one assigned switch is off, and standby in all remaining cases. For every combination of [enhancement implementations](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](javascript:call_link\('abenconflict_resol_impl_glosry.htm'\) "Glossary Entry") must be created to which the conflict switch is assigned.