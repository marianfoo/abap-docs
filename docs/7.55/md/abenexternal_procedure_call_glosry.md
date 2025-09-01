  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

external procedure call

[Procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") call from a different ABAP program of the same [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"). The first time one of its procedures is called, the required program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the calling program -if not already there- and, apart from [class pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry"), the [event](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_glosry.htm "Glossary Entry") [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapload-of-program.htm) is raised. See also [program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_group_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_procedures_extern.htm)