  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-70_ehps.htm) →  [News for Release 7.0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-70.htm) → 

XML Binding in Release 7.0

[1\. Enhancements to ST](#!ABAP_MODIFICATION_1@1@)
[2\. Changes to CALL TRANSFORMATION](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Enhancements to ST

The following changes have been made to the syntax for [Simple Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_transformation_glosry.htm "Glossary Entry"):

-   New statements tt:type, tt:node, and tt:front for the definition of types in the ST program.
-   New attribute type for tt:root for the typing of data roots.
-   In type definitions and typings, string and xstring can now be also be entered as elementary ABAP types, and lengths can be specified for c and x.
-   New statement tt:extensible for controlling the extensibility of literal XML elements.
-   Generalization of the term "pattern" for conditional transformations.

See the [ST Statement Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_statements.htm).

Modification 2   

Changes to CALL TRANSFORMATION

In the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm), the dynamic specification of parameters after the addition PARAMETERS has been enhanced by the option of entering the following table types:

-   abap\_trans\_obj\_bind\_tab for the specification of data references
-   abap\_trans\_objbind\_tab for the specification of object references.