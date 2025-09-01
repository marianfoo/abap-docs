  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

COMMUNICATION - Quick reference

[Reference](javascript:call_link\('abapcommunication.htm'\))

Syntax

COMMUNICATION *{* *{*INIT DESTINATION dest*}*
              *|* *{*ALLOCATE*}*
              *|* *{*ACCEPT*}*
              *|* *{*SEND BUFFER buf*}*
              *|* *{*RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat*}*
              *|* *{*DEALLOCATE*}* *}* ID id
              *\[*RETURNCODE rc*\]*
              *\[*LENGTH leng*\]*
              *\[*RECEIVED rec*\]*
              *\[*HOLD*\]*.

Effect

Obsolete: Enables communication with external programs using the [CPI-C](javascript:call_link\('abencpi-c_glosry.htm'\) "Glossary Entry") interface; the connection number is in id.

Additions

-   [INIT DESTINATION dest](javascript:call_link\('abapcommunication_comstep.htm'\))
    Initializes a connection dest.
    
-   [ALLOCATE](javascript:call_link\('abapcommunication_comstep.htm'\))
    Establishes a connection.
    
-   [ACCEPT](javascript:call_link\('abapcommunication_comstep.htm'\))
    Accepts a connection.
    
-   [SEND BUFFER buf](javascript:call_link\('abapcommunication_comstep.htm'\))
    Sends data in buf.
    
-   [RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat](javascript:call_link\('abapcommunication_comstep.htm'\))
    Receives data in buf and status information in dat and stat.
    
-   [DEALLOCATE](javascript:call_link\('abapcommunication_comstep.htm'\))
    Terminates a connection.
    
-   [RETURNCODE rc](javascript:call_link\('abapcommunication_options.htm'\))
    Receives a return code in rc.
    
-   [LENGTH leng](javascript:call_link\('abapcommunication_options.htm'\))
    Restricts the length of sent or received data to leng.
    
-   [RECEIVED rec](javascript:call_link\('abapcommunication_options.htm'\))
    Returns the number of received bytes in rec.
    
-   [HOLD](javascript:call_link\('abapcommunication_options.htm'\))
    Prevents the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") being changed when data is being received.