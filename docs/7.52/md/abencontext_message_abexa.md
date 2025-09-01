  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontext.htm) → 

Contexts, message handling

The example illustrates how messages can be handled in contexts.

Source Code

REPORT  demo\_context\_message.
DATA: c\_from TYPE spfli-cityfrom,
      c\_to   TYPE spfli-cityto.
CONTEXTS docu\_test1.
DATA: context\_inst TYPE context\_docu\_test1.
DATA: itab TYPE TABLE OF symsg,
      line LIKE LINE OF itab.
SUPPLY carrid = 'XX'
       connid = '400'
       TO CONTEXT context\_inst.
DEMAND cityfrom = c\_from
       cityto   = c\_to
       FROM CONTEXT context\_inst MESSAGES INTO itab.
IF sy-subrc NE 0.
  line = itab\[ 1 \].
  MESSAGE ID line-msgid TYPE 'I' NUMBER line-msgno
          WITH line-msgv1 line-msgv2 DISPLAY LIKE line-msgty.
ENDIF.
DEMAND cityfrom = c\_from
       cityto   = c\_to
       FROM CONTEXT context\_inst.

Description

First, the message handling is executed in the program which is achieved via the additon MESSAGES INTO of the statement DEMAND. The message is then available for further processing in the internal table itab. At the second DEMAND statement, the message handling is carried out by the system and the program cancels with an error message.