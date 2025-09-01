  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20external%20procedure%20call%2C%20ABENEXTERNAL_PROCEDURE_CALL_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

external procedure call

[Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") call from a different ABAP program of the same [AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry"). The first time one of its procedures is called, the required program is loaded into the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the calling program, if not already there, and, apart from [class pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_pool_glosry.htm "Glossary Entry"), the [event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenevent_glosry.htm "Glossary Entry") [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapload-of-program.htm) is raised. See also [program group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_group_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures_extern.htm)