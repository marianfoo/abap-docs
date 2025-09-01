  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [CPI-C Interface](javascript:call_link\('abenabap_cpic.htm'\)) →  [COMMUNICATION](javascript:call_link\('abapcommunication.htm'\)) → 

COMMUNICATION, comstep

[Short Reference](javascript:call_link\('abapcommunication_shortref.htm'\))

Obsolete Syntax

... *{*INIT DESTINATION dest*}*
  *|* ALLOCATE
  *|* ACCEPT
  *|* *{*SEND BUFFER buf*}*
  *|* *{*RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat*}*
  *|* DEALLOCATE ...

Alternatives:

[1\. ... INIT DESTINATION dest](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ALLOCATE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ACCEPT](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... SEND BUFFER buf](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... DEALLOCATE](#!ABAP_ALTERNATIVE_6@6@)

Effect

There are different alternatives for specifying comstep, each of which is responsible for a connection step.

Alternative 1   

... INIT DESTINATION  dest

Effect

The connection between the programs initialized by specifying dest. dest expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object of the length 8 that, when executing the statement, contains a value from the column SDEST of the DDIC database table TXCOM.

During initialization, the system automatically runs an authorization check on the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") S\_CPIC. The authorization can be checked before the connection is established using the function module AUTHORITY\_CHECK\_CPIC.

Alternative 2   

... ALLOCATE

Effect

Establishes a connection to the partner identified in the previous addition DESTINATION. At the same time, a start request is passed to the partner, if it is a program.

Alternative 3   

... ACCEPT

Effect

This addition can be used to accept the established connection in a called partner program. After authentication, the called program is in receive status.

Alternative 4   

... SEND BUFFER buf

Effect

Sends data to the partner program. A data object can be specified for buf, for which all [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. If the statement COMMUNICATION is executed, the content of buf is passed to the partner program.

Hints

-   A connection step opened with SEND must be followed by a connection step opened with RECEIVE.
-   Information loss, for example due to different number formats of the communication partners, is avoided if only character-like types are used for transferring the data. Furthermore, the data is only transferred completely if the sending and receiving buffers have the same structure and length.

Alternative 5   

... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat

Effect

Receives data from the partner program. A data object can be specified for buf, for which all flat elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. When the statement COMMUNICATION is executed, the content of buf is taken from the partner program.

After the execution of the statement, the data object dat contains information about whether the data is sent completely, and the content of the data object stat indicates whether the current program is in send or receive mode. Only byte-like data objects are allowed for dat and stat, the length should not be less than 4 bytes. The encoding for the values in dat and stat can be taken from the [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") RSCPICDF. Here, data objects with a descriptive name and [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") are declared which can be compared with dat and stat.

Hint

A connection step opened with RECEIVE must be followed by a connection step opened with SEND.

Alternative 6   

... DEALLOCATE

Effect

The connection is closed, and all memory areas are released.