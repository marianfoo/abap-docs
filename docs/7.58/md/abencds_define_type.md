  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20DEFINE%20TYPE%2C%20ABENCDS_DEFINE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - DEFINE TYPE

Syntax Forms

[CDS Simple Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_types.htm)

1\. *\[*[@type\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_anno.htm)*\]*
   *\[*[@type\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_anno.htm)*\]*
   ...
   DEFINE TYPE simple\_type : [dtype](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_overview_builtin_types.htm)
                           *|* [data\_element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dtel.htm)
                           *|* [simple\_type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type.htm)

[CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm)

2\. *\[*[@type\_annot1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)*\]*
   *\[*[@type\_annot2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_anno.htm)*\]*
   ...
     DEFINE TYPE EnumType : BaseType ENUM
     {
       *\[*@enum\_annot1*\]*
        EnumConstant1 = EnumValue1 *|* initial;
       *\[*@enum\_annot2*\]*
        EnumConstant2 = EnumValue2 *|* initial;
       *\[*...*\]*
     }
   *|* DEFINE TYPE EnumType : EnumType*\[*;*\]*

Effect

The statement DEFINE TYPE defines a [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry").

-   Without the addition ENUM, the type is a [CDS simple type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") that defines an [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry").
-   With the addition ENUM, the type is a [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") that defines an [enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_types.htm)
[ABAP CDS - Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm)