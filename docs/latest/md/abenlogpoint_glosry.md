  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20logpoint%2C%20ABENLOGPOINT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

logpoint

In an [ABAP program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_glosry.htm "Glossary Entry"), a logpoint is defined statically as an unconditional [checkpoint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_glosry.htm "Glossary Entry") using the statement [LOG-POINT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplog-point.htm), or dynamically in [transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_glosry.htm "Glossary Entry") SDLP or in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). When an active logpoint is reached, a log entry is created. A static logpoint must be assigned to a [checkpoint group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") when it is created. This group controls its [activation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry").