  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sharing, ABENSHARING_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

sharing

When [assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignment_glosry.htm "Glossary Entry") are made between [dynamic data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") ([strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry") and [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry") of the same type) and if these data types are [passed by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), for performance reasons, only the required internal administrative entries for the string or [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry") are passed ([table sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_sharing_glosry.htm "Glossary Entry") possible only if the [line type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrow_type_glosry.htm "Glossary Entry") itself does not contain any [table types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_type_glosry.htm "Glossary Entry")). Sharing is kept until one of the data objects involved is accessed and changed. At this point, the actual copy process takes place. See also [initial value sharing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_3.htm)