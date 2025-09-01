  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cpic.htm) →  [COMMUNICATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommunication.htm) → 

COMMUNICATION, cpic\_options

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

... *\[*RETURNCODE rc*\]*
    *\[*LENGTH leng*\]*
    *\[*RECEIVED rec*\]*
    *\[*HOLD*\]*.

Additions:

[1\. ... RETURNCODE  rc](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH leng](#!ABAP_ADDITION_2@2@)
[3\. ... RECEIVED rec](#!ABAP_ADDITION_3@3@)
[4\. ... HOLD](#!ABAP_ADDITION_4@4@)

Effect

Additional additions for the statement COMMUNICATION.

Addition 1

... RETURNCODE  rc

Effect

This addition can be specified for any communication steps and receives the return code in rc. rc expects the data type i. The meaning of the return codes is encoded in the [include program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") RSCPICDF. Here, data objects with descriptive names and [start values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstart_value_glosry.htm "Glossary Entry") are declared and can be compared with rc. The following table contains a list of possible return values.

rc

Data Object from RSCPICDF

0

cm\_ok

1

cm\_allocate\_failure\_no\_retry

2

cm\_allocate\_failure\_retry

3

cm\_conversation\_type\_mismatch

6

cm\_security\_not\_valid

8

cm\_sync\_lvl\_not\_supported\_pgm

9

cm\_tpn\_not\_recognized

10

cm\_tp\_not\_available\_no\_retry

11

cm\_tp\_not\_available\_retry

12

cm\_deallocated\_abend

13

cm\_deallocated\_normal

14

cm\_parameter\_error

15

cm\_product\_specific\_error

16

cm\_program\_error\_no\_trunc

18

cm\_program\_error\_no\_trunc

19

cm\_program\_error\_trunc

26

cm\_resource\_failure\_no\_retry

27

cm\_resource\_failure\_retry

28

cm\_unsuccessful

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

This addition can only be specified for the communication step RECEIVE. It prevents the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") being changed when receiving data to avoid the possible loss of the [database cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). In this case, the current work process waits until all data has been received.