  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

AUTHORITY-CHECK - Quick reference

[Reference](javascript:call_link\('abapauthority-check.htm'\))

Syntax

AUTHORITY-CHECK OBJECT auth\_obj *\[*FOR USER user*\]*
                        ID id1 *{*FIELD val1*}**|*DUMMY
                       *\[*ID id2 *{*FIELD val2*}**|*DUMMY*\]*
                       ...
                       *\[*ID id10 *{*FIELD val10*}**|*DUMMY*\]*.

Effect

Performs an authorization check for the current user or a specified user compared with the [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") auth\_obj. Either the entry in the user master record is evaluated using FIELD for the authorization field id1, ..., id10, or the check is skipped using DUMMY.

Additions

-   FOR USER user
    Checks the user entered in user.
    
-   FIELD val1, ..., FIELD val10
    Compares the content of val1, ..., val10 with the values for the authorization field id1, ..., id10 in the user master record.
    
-   DUMMY
    Skips the check for the authorization field id1, ..., id10.