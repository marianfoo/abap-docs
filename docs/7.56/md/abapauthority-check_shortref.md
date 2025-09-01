---
title: "AUTHORITY-CHECK - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm) Syntax AUTHORITY-CHECK OBJECT auth_obj FOR USER user ID id1 FIELD val1DUMMY ID id2 FIELD val2DUMMY ... ID id10 FIELD val10DUMMY. Effect Performs an auth
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check_shortref.htm"
abapFile: "abapauthority-check_shortref.htm"
keywords: ["do", "if", "try", "abapauthority", "check", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  A

AUTHORITY-CHECK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapauthority-check.htm)

Syntax

AUTHORITY-CHECK OBJECT auth\_obj *\[*FOR USER user*\]*
                        ID id1 *{*FIELD val1*}**|*DUMMY
                       *\[*ID id2 *{*FIELD val2*}**|*DUMMY*\]*
                       ...
                       *\[*ID id10 *{*FIELD val10*}**|*DUMMY*\]*.

Effect

Performs an authorization check for the current user or a specified user compared with the [authorization object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry") auth\_obj. Either the entry in the user master record is evaluated using FIELD for the authorization field id1, ..., id10, or the check is skipped using DUMMY.

Additions

-   FOR USER user
    Checks the user entered in user.
-   FIELD val1, ..., FIELD val10
    Compares the content of val1, ..., val10 with the values for the authorization field id1, ..., id10 in the user master record.
-   DUMMY
    Skips the check for the authorization field id1, ..., id10.