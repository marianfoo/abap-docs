  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

alignment

Most [data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_glosry.htm "Glossary Entry") are subject to specific alignment requirements depending on the current platform. In memory, [fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_glosry.htm "Glossary Entry") of this [type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_glosry.htm "Glossary Entry") must start at addresses that are divisible by 2, 4, 8, or 16. In a [structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_glosry.htm "Glossary Entry") or [substructure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstructure_glosry.htm "Glossary Entry"), the [component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_glosry.htm "Glossary Entry") with the highest alignment requirement determines the alignment of the entire structure, where [alignment gaps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_gap_glosry.htm "Glossary Entry") are created before or after components with alignment requirements.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment.htm)