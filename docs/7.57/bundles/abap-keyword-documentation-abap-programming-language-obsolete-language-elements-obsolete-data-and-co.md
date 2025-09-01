# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Data and Communication Interfaces / CPI-C Interface

Included pages: 5


### abenabap_cpic.htm

---
title: "CPI-C Interface"
description: |
  This section describes cross-system communications between two ABAP programs as realized using the COMMUNICATION(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) statement. Hint SDK for CPI-C is no longer supported. The CPI-C libraries and the documentation for pro
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm"
abapFile: "abenabap_cpic.htm"
keywords: ["do", "if", "try", "data", "abenabap", "cpic"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CPI-C Interface, ABENABAP_CPIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

CPI-C Interface

This section describes cross-system communications between two ABAP programs as realized using the [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) statement.

Hint

SDK for CPI-C is no longer supported. The CPI-C libraries and the documentation for programming are no longer delivered. For new programs, SDK and the libraries for [RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_glosry.htm "Glossary Entry") must be used. The API for CPI-C was retained to support existing programs and for internal technical purposes.

Continue
[COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm)


### abapcommunication.htm

---
title: "COMMUNICATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm) Obsolete Syntax COMMUNICATION comstep(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id  cpic_options(https://help.sap.com/doc/abapdocu_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm"
abapFile: "abapcommunication.htm"
keywords: ["do", "while", "if", "case", "try", "catch", "class", "data", "types", "abapcommunication"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, ABAPCOMMUNICATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMUNICATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

COMMUNICATION [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id *\[* [cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)*\]*.

Effect

This statement enables cross-system communication between two ABAP programs, or between an ABAP program and a program written in another programming language. The entire communication process takes place in individual communication steps, for which the COMMUNICATION statement must be executed repeatedly with the corresponding additions [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm). For both partner programs, communication is based on the [CPI-C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencpi-c_glosry.htm "Glossary Entry") interface, which has been defined as a communication standard by IBM as a part of the SAA standard. This interface provides the following functions in the form of the CPI-C starter set:

-   Establishing, accepting, and closing a connection
-   Sending and receiving data

Coordination of the individual communication steps, recording any errors that occur in the DDIC database table TCPIC and, if necessary, data conversion, take place in the individual programs themselves. The parameters that determined the physical partner system for a connection are administrated in the DDIC database table TXCOM.

Once the connection is initialized, the system writes an eight-digit connection number in the data object id. This number can be used to identify individual connections. As standard, 2\*\*16 connections are possible for each calling program. id expects only [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data types, with a minimum length of eight digits.

After initialization, the connection must be established. Then, in the first connection step, all the necessary administration data is sent to the partner system. The data sent in this connection step must have a specific structure and must be available in an [EBCDIC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenebcdic_glosry.htm "Glossary Entry") format. The example below shows how a specifically structured structure can be converted into the EBCDIC format. The subsequent response also exists in EBCDIC format. After this initial connection has been established, data can be transferred without the need for further conversion.

During communication, the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in the called program must not be changed. Screen output is ignored or, in the case of list output to the SAP spool system, is redirected if the statement NEW-PAGE was entered beforehand. [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of types I, S, and W are ignored, while types A and E cause the program to terminate.

Hints

-   The statement COMMUNICATION is not supported in classes and should no longer occur in programs, since support for the direct programming of the CPI-C interface has largely been discontinued. Instead, only the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry") is to be used for communication between programs. However, the function of the statement is maintained for supporting existing programs and for internal purposes.
-   The EBCDIC format is used in the first connection step because the CPI-C interface was mainly used for connections to R/2 systems.

Example

In the simplest case, an ABAP program calls a subroutine in an ABAP program of another [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). To enable this, the calling program must log on to the other system by specifying the type of CPI-C service, the logon data, the programs and subroutines, and the type of error handling. The registration takes place by sending a specific structure to the other system in EBCDIC format.

The following example shows a schematic representation of the communication between two ABAP programs P1 and P2 without querying return values. The calling program P1 first creates the connection and sends a field connect\_xstr that contains the content of the connect structure converted to EBCDIC format with the necessary data. After the connection is confirmed by P2, P1 sends the actual, unconverted application data in the buffer b. When this data has been received, P2 sends a confirmation to P1. The connection from P1 is then closed again and the content of the buffer (Answer) is produced as output.

PROGRAM p1.
DATA: d    TYPE c LENGTH 8,
      id   TYPE c LENGTH 8,
      b TYPE c LENGTH 10,
      len  TYPE x LENGTH 4,
      dat  TYPE xstring,
      stat TYPE xstring,
      BEGIN OF connect,
        header   TYPE c LENGTH 12 VALUE 'CONNCPIC1',
        client   TYPE c LENGTH  3 VALUE '001',
        user     TYPE c LENGTH 12 VALUE 'BONDJ',
        password TYPE c LENGTH  8 VALUE '007',
        language TYPE c LENGTH  1 VALUE 'E',
        corr     TYPE c LENGTH  1 VALUE ' ',
        program  TYPE c LENGTH  8 VALUE 'P2',
        routine  TYPE c LENGTH 30 VALUE 'CPIC\_START',
      END OF connect,
      connect\_str  TYPE c LENGTH 75,
      connect\_xstr TYPE x LENGTH 75,
      connect\_ret  TYPE x LENGTH 75,
      converter TYPE REF TO cl\_abap\_conv\_out\_ce.
connect\_str = connect.
converter = cl\_abap\_conv\_out\_ce=>create( encoding = '0101' ).
converter->write( data = connect\_str ).
connect\_xstr = converter->get\_buffer( ).
d = ...
COMMUNICATION INIT
  DESTINATION d
  ID id.
COMMUNICATION ALLOCATE
  ID id.
COMMUNICATION SEND
  BUFFER connect\_xstr
  ID id.
                        PROGRAM p2.
                        DATA:
                          id   TYPE c LENGTH 8,
                          b TYPE c LENGTH 10,
                          len  TYPE x LENGTH 4,
                          dat  TYPE xstring,
                          stat TYPE xstring.
                        FORM cpic\_start.
                          COMMUNICATION ACCEPT
                            ID id.
COMMUNICATION RECEIVE
  BUFFER     connect\_ret
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID id.
b = 'Request'.
COMMUNICATION SEND
  BUFFER b
  ID id.
                          COMMUNICATION RECEIVE
                            BUFFER     b
                            RECEIVED   len
                            DATAINFO   dat
                            STATUSINFO stat
                            ID         id.
                          IF b = 'Request'.
                            b = 'Answer'.
                          ENDIF.
                          COMMUNICATION SEND
                            BUFFER     b
                            ID         id.
                        ENDFORM.
CLEAR b.
COMMUNICATION RECEIVE
  BUFFER     b
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID         id.
WRITE / b.
COMMUNICATION DEALLOCATE ID id.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No authorization to accept a CPIC connection.
    Runtime error: COMMUNICATION\_ACCEPT\_NO\_AUTH
-   Cause: No authorization to open a CPIC connection.
    Runtime error: COMMUNICATION\_INIT\_NO\_AUTH

Continue
[COMMUNICATION, comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm)
[COMMUNICATION, cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)


### abapcommunication_comstep.htm

---
title: "COMMUNICATION, comstep"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm) Obsolete Syntax ... INIT DESTINATION dest  ALLOCATE  ACCEPT  SEND BUFFER buf  RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat  DEALLOCATE ... Alternatives: 1
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm"
abapFile: "abapcommunication_comstep.htm"
keywords: ["do", "if", "try", "data", "types", "abapcommunication", "comstep"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) →  [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, comstep, ABAPCOMMUNICATION_COMSTEP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

COMMUNICATION, comstep

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

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

The connection between the programs initialized by specifying dest. dest expects a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object of the length 8 that, when executing the statement, contains a value from the column SDEST of the DDIC database table TXCOM.

During initialization, the system automatically runs an authorization check on the [authorization object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_CPIC. The authorization can be checked before the connection is established using the function module AUTHORITY\_CHECK\_CPIC.

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

Sends data to the partner program. A data object can be specified for buf, for which all [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. If the statement COMMUNICATION is executed, the content of buf is passed to the partner program.

Hints

-   A connection step opened with SEND must be followed by a connection step opened with RECEIVE.
-   Information loss, for example due to different number formats of the communication partners, is avoided if only character-like types are used for transferring the data. Furthermore, the data is only transferred completely if the sending and receiving buffers have the same structure and length.

Alternative 5   

... RECEIVE BUFFER buf DATAINFO dat STATUSINFO stat

Effect

Receives data from the partner program. A data object can be specified for buf, for which all flat elementary types are allowed and the memory requirement of 32000 bytes cannot be exceeded. When the statement COMMUNICATION is executed, the content of buf is taken from the partner program.

After the execution of the statement, the data object dat contains information about whether the data is sent completely, and the content of the data object stat indicates whether the current program is in send or receive mode. Only byte-like data objects are allowed for dat and stat, the length should not be less than 4 bytes. The encoding for the values in dat and stat can be taken from the [include program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") RSCPICDF. Here, data objects with a descriptive name and [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") are declared which can be compared with dat and stat.

Hint

A connection step opened with RECEIVE must be followed by a connection step opened with SEND.

Alternative 6   

... DEALLOCATE

Effect

The connection is closed, and all memory areas are released.


### abapcommunication_options.htm

---
title: "Obsolete Syntax"
description: |
  ... RETURNCODE rc LENGTH leng RECEIVED rec HOLD. Additions: 1. ... RETURNCODE  rc(#!ABAP_ADDITION_1@1@) 2. ... LENGTH leng(#!ABAP_ADDITION_2@2@) 3. ... RECEIVED rec(#!ABAP_ADDITION_3@3@) 4. ... HOLD(#!ABAP_ADDITION_4@4@) Effect Further additions for the st
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm"
abapFile: "abapcommunication_options.htm"
keywords: ["do", "if", "case", "try", "data", "abapcommunication", "options"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) →  [COMMUNICATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, cpic_options, ABAPCOMMUNICATION_OPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

COMMUNICATION, cpic\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

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

Further additions for the statement COMMUNICATION.

Addition 1   

... RETURNCODE  rc

Effect

This addition can be specified for any communication steps and receives the return code in rc. rc expects the data type i. The meaning of the return codes is encoded in the [include program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") RSCPICDF. Here, data objects with descriptive names and [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") are declared and can be compared with rc. The following table contains a list of possible return values.

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

This addition can only be specified for the communication step RECEIVE. It prevents a change of the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") when receiving data to avoid the possible loss of the [database cursor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_cursor_glosry.htm "Glossary Entry"). In this case, the current work process waits until all data has been received.


### abapcommunication.htm

---
title: "COMMUNICATION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm) Obsolete Syntax COMMUNICATION comstep(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id  cpic_options(https://help.sap.com/doc/abapdocu_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication.htm"
abapFile: "abapcommunication.htm"
keywords: ["do", "while", "if", "case", "try", "catch", "class", "data", "types", "abapcommunication"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextern_obsolete.htm) →  [CPI-C Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cpic.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMUNICATION, ABAPCOMMUNICATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMUNICATION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_shortref.htm)

Obsolete Syntax

COMMUNICATION [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm) ID id *\[* [cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)*\]*.

Effect

This statement enables cross-system communication between two ABAP programs, or between an ABAP program and a program written in another programming language. The entire communication process takes place in individual communication steps, for which the COMMUNICATION statement must be executed repeatedly with the corresponding additions [comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm). For both partner programs, communication is based on the [CPI-C](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencpi-c_glosry.htm "Glossary Entry") interface, which has been defined as a communication standard by IBM as a part of the SAA standard. This interface provides the following functions in the form of the CPI-C starter set:

-   Establishing, accepting, and closing a connection
-   Sending and receiving data

Coordination of the individual communication steps, recording any errors that occur in the DDIC database table TCPIC and, if necessary, data conversion, take place in the individual programs themselves. The parameters that determined the physical partner system for a connection are administrated in the DDIC database table TXCOM.

Once the connection is initialized, the system writes an eight-digit connection number in the data object id. This number can be used to identify individual connections. As standard, 2\*\*16 connections are possible for each calling program. id expects only [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") character-like data types, with a minimum length of eight digits.

After initialization, the connection must be established. Then, in the first connection step, all the necessary administration data is sent to the partner system. The data sent in this connection step must have a specific structure and must be available in an [EBCDIC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenebcdic_glosry.htm "Glossary Entry") format. The example below shows how a specifically structured structure can be converted into the EBCDIC format. The subsequent response also exists in EBCDIC format. After this initial connection has been established, data can be transferred without the need for further conversion.

During communication, the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") in the called program must not be changed. Screen output is ignored or, in the case of list output to the SAP spool system, is redirected if the statement NEW-PAGE was entered beforehand. [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of types I, S, and W are ignored, while types A and E cause the program to terminate.

Hints

-   The statement COMMUNICATION is not supported in classes and should no longer occur in programs, since support for the direct programming of the CPI-C interface has largely been discontinued. Instead, only the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_interface_glosry.htm "Glossary Entry") is to be used for communication between programs. However, the function of the statement is maintained for supporting existing programs and for internal purposes.
-   The EBCDIC format is used in the first connection step because the CPI-C interface was mainly used for connections to R/2 systems.

Example

In the simplest case, an ABAP program calls a subroutine in an ABAP program of another [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"). To enable this, the calling program must log on to the other system by specifying the type of CPI-C service, the logon data, the programs and subroutines, and the type of error handling. The registration takes place by sending a specific structure to the other system in EBCDIC format.

The following example shows a schematic representation of the communication between two ABAP programs P1 and P2 without querying return values. The calling program P1 first creates the connection and sends a field connect\_xstr that contains the content of the connect structure converted to EBCDIC format with the necessary data. After the connection is confirmed by P2, P1 sends the actual, unconverted application data in the buffer b. When this data has been received, P2 sends a confirmation to P1. The connection from P1 is then closed again and the content of the buffer (Answer) is produced as output.

PROGRAM p1.
DATA: d    TYPE c LENGTH 8,
      id   TYPE c LENGTH 8,
      b TYPE c LENGTH 10,
      len  TYPE x LENGTH 4,
      dat  TYPE xstring,
      stat TYPE xstring,
      BEGIN OF connect,
        header   TYPE c LENGTH 12 VALUE 'CONNCPIC1',
        client   TYPE c LENGTH  3 VALUE '001',
        user     TYPE c LENGTH 12 VALUE 'BONDJ',
        password TYPE c LENGTH  8 VALUE '007',
        language TYPE c LENGTH  1 VALUE 'E',
        corr     TYPE c LENGTH  1 VALUE ' ',
        program  TYPE c LENGTH  8 VALUE 'P2',
        routine  TYPE c LENGTH 30 VALUE 'CPIC\_START',
      END OF connect,
      connect\_str  TYPE c LENGTH 75,
      connect\_xstr TYPE x LENGTH 75,
      connect\_ret  TYPE x LENGTH 75,
      converter TYPE REF TO cl\_abap\_conv\_out\_ce.
connect\_str = connect.
converter = cl\_abap\_conv\_out\_ce=>create( encoding = '0101' ).
converter->write( data = connect\_str ).
connect\_xstr = converter->get\_buffer( ).
d = ...
COMMUNICATION INIT
  DESTINATION d
  ID id.
COMMUNICATION ALLOCATE
  ID id.
COMMUNICATION SEND
  BUFFER connect\_xstr
  ID id.
                        PROGRAM p2.
                        DATA:
                          id   TYPE c LENGTH 8,
                          b TYPE c LENGTH 10,
                          len  TYPE x LENGTH 4,
                          dat  TYPE xstring,
                          stat TYPE xstring.
                        FORM cpic\_start.
                          COMMUNICATION ACCEPT
                            ID id.
COMMUNICATION RECEIVE
  BUFFER     connect\_ret
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID id.
b = 'Request'.
COMMUNICATION SEND
  BUFFER b
  ID id.
                          COMMUNICATION RECEIVE
                            BUFFER     b
                            RECEIVED   len
                            DATAINFO   dat
                            STATUSINFO stat
                            ID         id.
                          IF b = 'Request'.
                            b = 'Answer'.
                          ENDIF.
                          COMMUNICATION SEND
                            BUFFER     b
                            ID         id.
                        ENDFORM.
CLEAR b.
COMMUNICATION RECEIVE
  BUFFER     b
  DATAINFO   dat
  STATUSINFO stat
  RECEIVED   len
  ID         id.
WRITE / b.
COMMUNICATION DEALLOCATE ID id.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: No authorization to accept a CPIC connection.
    Runtime error: COMMUNICATION\_ACCEPT\_NO\_AUTH
-   Cause: No authorization to open a CPIC connection.
    Runtime error: COMMUNICATION\_INIT\_NO\_AUTH

Continue
[COMMUNICATION, comstep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_comstep.htm)
[COMMUNICATION, cpic\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommunication_options.htm)
