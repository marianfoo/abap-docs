  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

conflict resolution

Term in [Switch Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_framework_glosry.htm "Glossary Entry"). A conflict occurs if more than one [enhancement implementation element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") exists for a single [enhancement option](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") (for which only one enhancement can be carried out) and when more than one of those enhancement implementation elements are switched on at the same time. Currently, a conflict can occur with the statements [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm) and [GET BADI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_badi.htm). To resolve the conflict, the [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") with the highest priority is found among the [enhancement implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") and its enhancement implementation element used.