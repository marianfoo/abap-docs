  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-4.htm) →  [News for Release 4.6A](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-46a.htm) → 

Casts to Any Data Type in Release 4.6A

The addition CASTING in Release 4.6A allows any memory area to be considered under the aspect of a particular type. This method of typing allows fields to be accessed symbolically instead of specifying offset and length, especially when implementing unions and containers. The following variants are possible:

-   Static cast with implicit type specification
-   Dynamic cast with explicit type specification

[1\. ASSIGN f TO <fs> CASTING](#!ABAP_MODIFICATION_1@1@)
[2\. ASSIGN f TO <fs> CASTING TYPE type](#!ABAP_MODIFICATION_2@2@)
[3\. ASSIGN f TO <fs> CASTING LIKE field](#!ABAP_MODIFICATION_3@3@)

Modification 1   

ASSIGN f TO <fs> CASTING
In this static variant, the field symbol must be completely typed. The content of field f is interpreted in accordance with the type of the field symbol.

Modification 2   

ASSIGN f TO <fs> CASTING TYPE type
Here, the field f is not handled in accordance with the type of the field symbol, but in accordance with the specified type (static variant). If the specified type CASTING TYPE (typename) is placed in parentheses, the content of the data object in the parentheses determines the data type at runtime (dynamic variant).

Modification 3   

ASSIGN f TO <fs> CASTING LIKE field
In this case, field f is handled in accordance with the type of the field field (static variant). This variant is used dynamically by specifying a typed field symbol instead of the field field. Another option is, for example, to pass an untyped parameter in a FORM call. Here, the type of the passed actual parameter would be used at runtime.

Hint

Typed field symbols should be used for performance reasons. The runtime of a typed ASSIGN statement is around 40 percent less than that required for an equivalent untyped ASSIGN statement.