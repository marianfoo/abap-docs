  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20TRANSFORMATION%2C%20ABAPCALL_TRANSFORMATION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL TRANSFORMATION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation.htm)

Syntax

CALL TRANSFORMATION *{*trans*|*(name)*}*
                    *\[*PARAMETERS *{*p1 = e1 p2 = e2 ...*}**|*(ptab)*\]*
                    *\[*OBJECTS    *{*o1 = e1 o2 = e2 ...*}**|*(otab)*\]*
                    *\[*OPTIONS    *{*a1 = e1 a2 = e2 ...*}**\]*
                    SOURCE *{*XML src\_xml*}*
                         *|* *{**{*bn1 = e1 bn2 = e2 ...*}**|*(stab)*}*
                    RESULT *{*XML rslt\_xml*}*
                         *|* *{* *{*bn1 = f1 bn2 = f2 ...*}**|*(rtab)
                             *\[*AREA HANDLE handle*\]* *}*.

Effect

Calls an [XSL transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") or [Simple Transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensimple_transformation_glosry.htm "Glossary Entry") specified statically in trans or specified dynamically in name. The call of the predefined transformation [identity transformation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID serializes ABAP data into the [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry") format.

Additions   

-   PARAMETERS *{*p1 = e1 p2 = e2 ...*}**|*ptab
    Passes parameters specified individually as p1 = e1 p2 = e2 ... or specified in an internal table ptab to the transformation.
-   [OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*otab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_objects.htm)
    Obsolete: Passes object references specified individually as o1 = e1 o2 = e2 ... or specified in an internal table otab to the transformation.
-   OPTIONS *{*a1 = e1 a2 = e2 ...*}*
    Passes control parameters to the transformation.
-   SOURCE *{*XML src\_xml*}**|**{**{*bn1 = e1 bn2 = e2 ...*}**|*(stab)*}*
    Specifies the source to be transformed. This can be [XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxml_glosry.htm "Glossary Entry") data in src\_xml or data objects specified individually as bn1 = e1 bn2 = e2 ... or specified in an internal table stab.
-   RESULT *{*XML rslt\_xml*}**|**{**{*bn1 = f1 bn2 = f2 ...*}**|*(rtab)*}*
    Specifies the repository of the transformation result. This can be XML data in rslt\_xml or data objects specified individually as bn1 = f1 bn2 = f2 ... in an internal table rtab.
-   AREA HANDLE handle
    Instantiates anonymous data objects and instances of classes that are deserialized from XML data with an XSL transformation directly as [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the AS instance.