  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Daemons%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-DAEMONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Daemons in ABAP Release 7.52

[1\. Introduction of ABAP Daemons](#!ABAP_MODIFICATION_1@1@)
[2\. Timers for the Non-Blocking Mode](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Introduction of ABAP Daemons

An [ABAP Daemon](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon.htm) is an instance of an [ABAP Daemon class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") in an [ABAP Daemon session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"). An ABAP Daemon is created again automatically every time a [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry") or a message of type E, A, or X causes a program termination.

Modification 2   

Timers for the Non-Blocking Mode

[ABAP Timers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_glosry.htm "Glossary Entry") can be used to define wait times in the [non-blocking mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennon_blocking_model_glosry.htm "Glossary Entry"). An ABAP Timer is created by [ABAP Timer Manager](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_manager_glosry.htm "Glossary Entry") and handled using [ABAP Timer handlers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER.

The new object types replace the previous types CL\_APC\_TIMER\_MANAGER, IF\_APC\_TIMER\_MANAGER, and IF\_APC\_TIMER\_HANDLER.