  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMUNICATION%2C%20ABAPCOMMUNICATION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COMMUNICATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication.htm)

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

Obsolete: Enables communication with external programs using the [CPI-C](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencpi-c_glosry.htm "Glossary Entry") interface; the connection number is in id.

Additions   

-   [INIT DESTINATION dest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Initializes a connection dest.
-   [ALLOCATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Establishes a connection.
-   [ACCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Accepts a connection.
-   [SEND BUFFER buf](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Sends data in buf.
-   [RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Receives data in buf and status information in dat and stat.
-   [DEALLOCATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_comstep.htm)
    Terminates a connection.
-   [RETURNCODE rc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_options.htm)
    Receives a return code in rc.
-   [LENGTH leng](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_options.htm)
    Restricts the length of sent or received data to leng.
-   [RECEIVED rec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_options.htm)
    Returns the number of received bytes in rec.
-   [HOLD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommunication_options.htm)
    Prevents the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") being changed when data is being received.