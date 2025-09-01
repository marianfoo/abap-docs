---
title: "EXPORT, Internal Additions"
description: |
  These additions are for internal use only. Do not use them in application programs. Additions: 1. ... CODE PAGE HINT cp(#!ABAP_ADDITION_1@1@) 2. ... USING subr(prog)(#!ABAP_ADDITION_2@2@) Addition 1 ... CODE PAGE HINT cp Effect In cp, a code page(https://help.sap.com/doc/abapdocu_757
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_internal.htm"
abapFile: "abapexport_internal.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapexport", "internal"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, Internal Additions, ABAPEXPORT_INTERNAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

EXPORT, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... CODE PAGE HINT cp](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1   

... CODE PAGE HINT cp

Effect

In cp, a [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") from database table TCP00 can be specified that overwrites the automatically stored ID.

Addition 2   

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [EXPORT TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) if a table work area dbtab is declared for the relevant database table using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm). The addition FROM wa is not allowed. The data is not exported to the database table. Instead, the subroutine subr is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area dbtab.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table (dbtab). The subroutine must have a USING parameter of type any, but this is currently not supplied.

Hints

-   For external use, TO INTERNAL TABLE is provided instead of TO DATABASE ... USING.
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform_obsolete.htm).
-   The tables used as the [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) must have structures for data clusters in multiple rows, since TABLES cannot be used for deep structures.

Example

See [IMPORT - Internal Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_internal.htm)