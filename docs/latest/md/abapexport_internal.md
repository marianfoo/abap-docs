  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20Internal%20Additions%2C%20ABAPEXPORT_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... CODE PAGE HINT cp](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1   

... CODE PAGE HINT cp

Effect

In cp, a [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") from database table TCP00 can be specified that overwrites the automatically stored ID.

Addition 2   

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [EXPORT TO DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) if a table work area dbtab is declared for the relevant database table using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm). The addition FROM wa is not allowed. The data is not exported to the database table. Instead, the subroutine subr is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area dbtab.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table (dbtab). The subroutine must have a USING parameter of type any, but this is currently not supplied.

Hints

-   For external use, TO INTERNAL TABLE is provided instead of TO DATABASE ... USING.
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_obsolete.htm).
-   The tables used as the [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) must have structures for data clusters in multiple rows, since TABLES cannot be used for deep structures.

Example

See [IMPORT - Internal Additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_internal.htm)