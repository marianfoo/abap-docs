  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

dynpro sequence

The sequence in which [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") are processed whose flow is determined by the [next dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennext_dynpro_glosry.htm "Glossary Entry") for each dynpro in the sequence. The first dynpro in a dynpro sequence is the [initial dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_dynpro_glosry.htm "Glossary Entry"). Dynpro sequences are called using [transaction codes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_code_glosry.htm "Glossary Entry") or [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm). A dynpro sequence always part of a single [popup level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpop-up_level_glosry.htm "Glossary Entry") and is executed in a single [GUI window](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_window_glosry.htm "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_number_glosry.htm "Glossary Entry") 0 is called.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_processing.htm)