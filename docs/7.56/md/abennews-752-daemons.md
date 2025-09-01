  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

ABAP Daemons in Release 7.52

[1\. Introduction of ABAP Daemons](#!ABAP_MODIFICATION_1@1@)
[2\. Timers for the Non-Blocking Mode](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Introduction of ABAP Daemons

An [ABAP Daemon](javascript:call_link\('abenabap_daemon.htm'\)) is an instance of an [ABAP Daemon class](javascript:call_link\('abenabap_daemon_class_glosry.htm'\) "Glossary Entry") in an [ABAP Daemon session](javascript:call_link\('abenabap_daemon_session_glosry.htm'\) "Glossary Entry"). An ABAP Daemon is created again automatically every time a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") or a message of type E, A, or X causes a program termination.

Modification 2   

Timers for the Non-Blocking Mode

[ABAP Timers](javascript:call_link\('abenabap_timer_glosry.htm'\) "Glossary Entry") can be used to define wait times in the [non-blocking mode](javascript:call_link\('abennon_blocking_model_glosry.htm'\) "Glossary Entry"). An ABAP Timer is created by [ABAP Timer Manager](javascript:call_link\('abenabap_timer_manager_glosry.htm'\) "Glossary Entry") and handled using [ABAP Timer handlers](javascript:call_link\('abenabap_timer_handler_glosry.htm'\) "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER.

The new object types replace the previous types CL\_APC\_TIMER\_MANAGER, IF\_APC\_TIMER\_MANAGER, and IF\_APC\_TIMER\_HANDLER.