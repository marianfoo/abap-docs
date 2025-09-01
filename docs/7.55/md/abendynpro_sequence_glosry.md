  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

dynpro sequence

Processing sequence of [dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") whose flow is determined by the [next dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennext_dynpro_glosry.htm "Glossary Entry") for each dynpro involved. The first dynpro in a dynpro sequence is the [initial dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_dynpro_glosry.htm "Glossary Entry"). Dynpro sequences are called using [transaction codes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry") or [CALL SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_screen.htm). A dynpro sequence always belongs to a single [popup level](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpop-up_level_glosry.htm "Glossary Entry") and is executed in a single [GUI window](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengui_window_glosry.htm "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_number_glosry.htm "Glossary Entry") 0 is called.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_processing.htm)