  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Casting to Any Data Type in Release 4.6A

The CASTING addition in Release 4.6A allows you to regard any memory area on the assumption that it has a particular type. This method of type specification allows you to address fields symbolically instead of specifying offset and length, especially for implementing unions and containers. The following variants are possible:

-   Static cast with implicit type specification
    
-   Dynamic cast with explicit type specification
    

Modification 1

[ASSIGN f TO <fs> CASTING.](javascript:call_link\('abapassign.htm'\)) In this static variant, the type of the field symbol must be fully specified. The contents of field f are interpreted according to the type of the field symbol.

Modification 2

[ASSIGN f TO <fs> CASTING TYPE type](javascript:call_link\('abapassign.htm'\)). Here, the field f is not treated according to the type of the field symbol, but according to the type that you specify (static variant). If you enclose the CASTING TYPE (typename) in parentheses, the content of the data object in the parentheses determines the data type at runtime (dynamic variant).

Modification 3

[ASSIGN f TO <fs> CASTING LIKE field.](javascript:call_link\('abapassign.htm'\)) In this case, field f is treated according to the type of field <field> (static variant). You can use this variant dynamically by specifying a typed field symbol instead of a field. Another possibility is, for example, to pass an untyped parameter in a subroutine call. Here, the type of the actual parameter would be used.

Note

You should use typed field symbols for performance reasons. The runtime of a typed ASSIGN statement is around 40 percent less than that required for an equivalent untyped ASSIGN statement.