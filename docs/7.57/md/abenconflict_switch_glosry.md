  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: conflict switch, ABENCONFLICT_SWITCH_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

conflict switch

A special [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") for [conflict resolution](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resolution_glosry.htm "Glossary Entry"). Multiple regular switches are assigned to a conflict switch. The switch status of a conflict switch is determined by the switch status of the assigned switches: on if all assigned switches are on, off if at least one assigned switch is off, and standby in all remaining cases. For every combination of [enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") to which the regular switches of the conflict switch are assigned, a [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") must be created to which the conflict switch is assigned.