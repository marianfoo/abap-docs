  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Contexts (Obsolete)](javascript:call_link\('abencontext.htm'\)) → 

Contexts, Message Handling

This example demonstrates how messages can be handled in contexts.

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

First, the message is handled in the program using the addition MESSAGES INTO of the statement DEMAND. The message is then available for further processing in the internal table itab. In the second DEMAND statement, the message is handled by the system and the program cancels with an error message.