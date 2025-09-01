  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Further Changes in Release 4.0

[1\. Improved Behavior in EDITOR-CALL FOR itab](#!ABAP_MODIFICATION_1@1@)
[2\. New Variant DESCRIBE FIELD f INTO td](#!ABAP_MODIFICATION_2@2@)
[3\. Invalid Declarations](#!ABAP_MODIFICATION_3@3@)
[4\. ABAP Types 1 and 2](#!ABAP_MODIFICATION_4@4@)
[5\. WRITE: New Formatting Option NO-GROUPING](#!ABAP_MODIFICATION_5@5@)
[6\. WRITE: Improved Behavior in WRITE (name)...TO](#!ABAP_MODIFICATION_6@6@)
[7\. SET RUN TIME ANALYZER ON/OFF](#!ABAP_MODIFICATION_7@7@)
[8\. Arithmetic Using DICTIONARY types INT1 and INT2](#!ABAP_MODIFICATION_8@8@)
[9\. PERFORM form(prog): Improved Behavior for Addition IF FOUND](#!ABAP_MODIFICATION_9@9@)
[10\. Contexts](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Improved Behavior in EDITOR-CALL FOR itab
The table is only returned with changes if saved in the editor. The new addition ... BACKUP INTO is used to return the table to its original state. sy-subrc is used to indicate whether change operations were performed in the editor.

Modification 2   

New Variant DESCRIBE FIELD f INTO td
This new variant can be used to determine all of the attributes of a data object f.
Also, a simple DESCRIBE can be used with the addition "HELP-ID hlp" to determine which help ID belongs to f if any.

Modification 3   

Invalid Declarations
Fields ending with a '+' or '()' are no longer allowed in DATA.

Modification 4   

ABAP Types 1 and 2
In Release 3.x, the ABAP types 1 and 2 were still supported in some areas in a very basic manner to retain R/2 compatibility. This is no longer the case in Release 4.0.

Modification 5   

WRITE: New Formatting Option NO-GROUPING
If a field of type I or type P is displayed, its thousands separator is suppressed.

Modification 6   

WRITE: Improved Behavior in WRITE (name)...TO
If the content of the field name is invalid, a return code is set and the target field is left unchanged.

Modification 7   

SET RUN TIME ANALYZER ON/OFF
The addition MODE is no longer used.

Modification 8   

Arithmetic Using DICTIONARY types INT1 and INT2
Assignments and arithmetic using DICTIONARY types INT1 and INT2 as target fields must remain within the following value ranges:

-   INT1: 0 to 255
-   INT2: -32768 to 32767.

Otherwise a runtime error is produced.

Modification 9   

PERFORM form(prog): Improved Behavior for Addition IF FOUND
The PERFORM statement is ignored if the program specified cannot be found.

Modification 10   

Contexts

An overview of contexts is provided [here](javascript:call_link\('abapcontexts.htm'\)).