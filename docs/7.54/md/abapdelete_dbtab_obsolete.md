---
title: "DELETE dbtab - VERSION"
description: |
  Obsolete Syntax DELETE  dbtab  dbtab  VERSION vers. Effect This variant of the statement DELETE works essentially like the short form(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_obsolete.htm) of the ABAP SQL statement, but belongs, along with the addition VERSI
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab_obsolete.htm"
abapFile: "abapdelete_dbtab_obsolete.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "abapdelete", "dbtab", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_access_obsolete.htm) → 

DELETE dbtab - VERSION

Obsolete Syntax

DELETE *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement DELETE works essentially like the [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_obsolete.htm) of the ABAP SQL statement, but belongs, along with the addition VERSION, to the number of [obsolete access statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_access_obsolete.htm), for which for dbtab, the name of a database table or a [classic view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclassical_view_glosry.htm "Glossary Entry") must be specified, beginning with "T" and comprising no more than five characters.

The use of addition VERSION means that the database table or view dbtab is not processed. Instead the table whose name is made up of "T" and the content of vers is processed. vers expects a data object with a maximum of four characters, of type c. The contents of the key fields will continue to be obtained from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not meet the name conventions specified above.

Notes

-   The VERSION addition is not allowed in classes. Instead, specify the database table or view dynamically in its operand position in ABAP SQL.
    
-   None of the additions possible in ABAP SQL can be specified with VERSION.
    
-   Obsolete access statements do not support [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm). The [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.
    

Example

TABLES t100.
DATA vers TYPE c LENGTH 4.
...
vers = '100'.
...
t100-sprsl = 'E'.
t100-arbgb = 'BC'.
t100-msgnr = '100'.
DELETE t100 VERSION vers.

The ABAP SQL syntax to be used instead reads:

DATA: wa TYPE t100,
      dbtab TYPE c LENGTH 5.
...
dbtab = 'T100'.
...
wa-sprsl = 'E'.
wa-arbgb = 'BC'.
wa-msgnr = '100'.
DELETE (dbtab) FROM @wa.