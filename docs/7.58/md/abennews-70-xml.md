  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for ABAP Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20XML%20Binding%20in%20ABAP%20Release%207.0%2C%20ABENNEWS-70-XML%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

XML Binding in ABAP Release 7.0

[1\. Enhancements to ST](#!ABAP_MODIFICATION_1@1@)
[2\. Changes to CALL TRANSFORMATION](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Enhancements to ST

The following changes have been made to the syntax for [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"):

-   New statements tt:type, tt:node, and tt:front for the definition of types in the ST program.
-   New attribute type for tt:root for the typing of data roots.
-   In type definitions and typings, string and xstring can now be also be entered as elementary ABAP types, and lengths can be specified for c and x.
-   New statement tt:extensible for controlling the extensibility of literal XML elements.
-   Generalization of the term pattern for conditional transformations.

See the [ST Statement Overview](javascript:call_link\('abenst_statements.htm'\)).

Modification 2   

Changes to CALL TRANSFORMATION

In the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the dynamic specification of parameters after the addition PARAMETERS has been enhanced by the option of entering the following table types:

-   abap\_trans\_obj\_bind\_tab for the specification of data references
-   abap\_trans\_objbind\_tab for the specification of object references.