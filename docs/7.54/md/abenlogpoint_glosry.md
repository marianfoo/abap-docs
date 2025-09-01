  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

logpoint

Logpoint in an [ABAP program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_glosry.htm "Glossary Entry"). A logpoint is defined statically as an unconditional [checkpoint](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_glosry.htm "Glossary Entry") using the statement [LOG-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplog-point.htm) or dynamically in [transaction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction_glosry.htm "Glossary Entry") SDLP or in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). When an active logpoint is reached, a log entry is created. A static logpoint must be assigned to a [checkpoint group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") when it is defined. This group controls its [activation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry").