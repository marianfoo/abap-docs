  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Statements for RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_obsolete.htm) →  [Obsolete ABAP EML Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_obsolete.htm) → 

GET FEATURES

Obsolete Syntax

GET *{* GLOBAL FEATURES
  *|* *{* *\[*INSTANCE*\]* FEATURES *}* *}*
       *{* ENTITY bdef FROM keys
         REQUEST request RESULT result
              *\[*response*\]* *}*
       *|* *{* OF bdef
             ENTITY bdef1 FROM keys
             REQUEST request RESULT result
            *\[*ENTITY bdef2 FROM keys
             REQUEST request RESULT result*\]*
            *\[*... *\]*
              *\[*response*\]* *}*
        *|* *{* OPERATIONS dynget
              *\[*response*\]* *}*.

Alternatives:

[1\. ... GLOBAL FEATURES ENTITY bdef FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... GLOBAL FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... GLOBAL FEATURES OPERATIONS dynget](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... FEATURES ENTITY bdef FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... FEATURES OPERATIONS dynget](#!ABAP_ALTERNATIVE_6@6@)

Addition:

[... INSTANCE](#!ABAP_ONE_ADD@1@)

Effect

[GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) should be used instead.

Alternative 1   

... GLOBAL FEATURES ENTITY bdef FROM keys REQUEST request RESULT result

Effect

Alternative 2   

... GLOBAL FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result

Effect

Alternative 3   

... GLOBAL FEATURES OPERATIONS dynget

Effect

Alternative 4   

... FEATURES ENTITY bdef FROM keys REQUEST request RESULT result

Effect

Alternative 5   

... FEATURES OF bdef ENTITY bdefi FROM keys REQUEST request RESULT result

Effect

Alternative 6   

... FEATURES OPERATIONS dynget

Effect

Addition   

... INSTANCE

Effect