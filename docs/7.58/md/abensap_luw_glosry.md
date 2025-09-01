  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20LUW%2C%20ABENSAP_LUW_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SAP LUW

Interrelated sequence of programming units, the execution of which, for example, in [dialog steps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_step_glosry.htm "Glossary Entry") or in [remote function calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), can be distributed across several [work processes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_process_glosry.htm "Glossary Entry"). However, their database changes are processed within a single [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry"). SAP LUWs are implemented by bundling techniques, in which programming units such as [update function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") or [subroutines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry") are registered in different work processes but executed by a single work process. An SAP LUW is usually started by opening a new [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") and completed by the [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit.htm). Changes within one SAP LUW can be undone by the ABAP SQL statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback.htm).

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_luw.htm)