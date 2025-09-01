  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20conflict%20switch%2C%20ABENCONFLICT_SWITCH_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

conflict switch

A special [switch](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenswitch_glosry.htm "Glossary Entry") for [conflict resolution](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: on if all assigned switches are on, off if at least one assigned switch is off, and standby in all remaining cases. For every combination of [enhancement implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") must be created to which the conflict switch is assigned.