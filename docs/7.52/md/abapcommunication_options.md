  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [CPI-C Interface](javascript:call_link\('abenabap_cpic.htm'\)) →  [COMMUNICATION](javascript:call_link\('abapcommunication.htm'\)) → 

COMMUNICATION - cpic\_options

[Quick Reference](javascript:call_link\('abapcommunication_shortref.htm'\))

Obsolete Syntax

... *\[*RETURNCODE rc*\]*
    *\[*LENGTH leng*\]*
    *\[*RECEIVED rec*\]*
    *\[*HOLD*\]*.

Extras:

[1\. ... RETURNCODE  rc](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH leng](#!ABAP_ADDITION_2@2@)
[3\. ... RECEIVED rec](#!ABAP_ADDITION_3@3@)
[4\. ... HOLD](#!ABAP_ADDITION_4@4@)

Effect

Additional additions for the statement COMMUNICATION.

Addition 1

... RETURNCODE  rc

Effect

This addition can be specified for any communication steps and receives the return code in rc. rc expects the data type i. The meaning of the return codes is encoded in the [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") RSCPICDF. Here, data objects with descriptive names and [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") are declared and can be compared with rc. The following table contains a list of possible return codes.

rc

Data Object from RSCPICDF

0

CM\_OK

1

CM\_ALLOCATE\_FAILURE\_NO\_RETRY

2

CM\_ALLOCATE\_FAILURE\_RETRY

3

CM\_CONVERSATION\_TYPE\_MISMATCH

6

CM\_SECURITY\_NOT\_VALID

8

CM\_SYNC\_LVL\_NOT\_SUPPORTED\_PGM

9

CM\_TPN\_NOT\_RECOGNIZED

10

CM\_TP\_NOT\_AVAILABLE\_NO\_RETRY

11

CM\_TP\_NOT\_AVAILABLE\_RETRY

12

CM\_DEALLOCATED\_ABEND

13

CM\_DEALLOCATED\_NORMAL

14

CM\_PARAMETER\_ERROR

15

CM\_PRODUCT\_SPECIFIC\_ERROR

16

CM\_PROGRAM\_ERROR\_NO\_TRUNC

18

CM\_PROGRAM\_ERROR\_NO\_TRUNC

19

CM\_PROGRAM\_ERROR\_TRUNC

26

CM\_RESOURCE\_FAILURE\_NO\_RETRY

27

CM\_RESOURCE\_FAILURE\_RETRY

28

CM\_UNSUCCESSFUL

The same return codes are also written to the system field sy-subrc.

Addition 2

... LENGTH leng

Effect

This addition can only be specified in the communication steps SEND and RECEIVE. As a result, the data buffer buffer is only sent or received in the length leng. The length leng expects a data object of the data type i.

Addition 3

... RECEIVED rec

Effect

This addition can only be specified for the communication step RECEIVE. The data object rec contains the number of bytes received by the partner program. Only byte-like data objects of length 4 are allowed for rec.

Addition 4

... HOLD

Effect

This addition can only be specified for the communication step RECEIVE. It prevents the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") being changed when receiving data to avoid the possible loss of the [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). In this case, the current work process waits until all data has been received.