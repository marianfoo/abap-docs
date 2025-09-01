  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

EXPORT - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Extras:

[1\. ... CODE PAGE HINT cp](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1

... CODE PAGE HINT cp

Effect

In cp, a [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") from database table TCP00 can be specified that overwrites the ID saved automatically.

Addition 2

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [EXPORT TO DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) if a table work area dbtab is declared for the relevant database table using [TABLES](javascript:call_link\('abaptables.htm'\)). The addition FROM wa is not permitted. The data is not exported to the database table. Instead, the subroutine subr is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area dbtab.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table ("dbtab"). The subroutine must have a USING parameter of type any, which is currently not supplied.

Notes

-   For external use, TO INTERNAL TABLE is provided instead of TO DATABASE ... USING.
    
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](javascript:call_link\('abapperform_obsolete.htm'\)).
    
-   The tables used as the [export/import tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) must have structures for data clusters in multiple rows, since TABLES cannot be used for deep structures.
    

Example

See [IMPORT - Internal Additions](javascript:call_link\('abapimport_internal.htm'\))