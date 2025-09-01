  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Access Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_access_obsolete.htm) → 

MODIFY dbtab - VERSION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab_shortref.htm)

Obsolete Syntax

MODIFY *{* dbtab *|* \*dbtab *}* VERSION vers.

Effect

This variant of the statement MODIFY works essentially like the [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_obsolete.htm) of the Open SQL statement, but belongs, along with the addition VERSION, to the number of [obsolete access statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_access_obsolete.htm), for which for dbtab, the name of a database table or a [classic view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") must be specified, beginning with "T" and comprising no more than five characters.

The use of addition VERSION means that the database table or view dbtab is not processed. Instead the table whose name is made up of "T" and the content of vers is processed. vers expects a data object with a maximum of four characters, of type c. The content of rows will continue to be obtained from the table work area dbtab or dbtab\*. The statement is not executed if the database table or view does not exist or if it does not meet the name conventions specified above.

Notes

-   The addition VERSION is not allowed in classes. Instead, specify the database table or view dynamically in its operand position in Open SQL.
    
-   None of the additions possible in Open SQL must be specified together with VERSION.
    
-   Obsolete access statements do not support automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry"). The [client ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_identifier_glosry.htm "Glossary Entry") of a database table must be specified explicitly. Note that application programs should only use data from the current client.