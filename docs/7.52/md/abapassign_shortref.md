  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

ASSIGN - Quick reference

[Reference](javascript:call_link\('abapassign.htm'\))

Syntax

ASSIGN *{* dobj*\[*+off*\]**\[*(len)*\]*
       *|* *\[*TABLE FIELD*\]* (name)
       *|* dref->\*
       *|* *{*dobj INCREMENT inc*}*
       *|* *{*COMPONENT comp OF STRUCTURE struc*}*
       *|* oref->(attr\_name)
       *|* *{*class*|*(class\_name)*}*\=>*{*attr*|*(attr\_name)*}*
       *|* writable\_exp *}*
  TO <fs>
  *\[* *{* CASTING *\[* *{*TYPE type*|*(name)*}*
              *|* *{*LIKE dobj*}*
              *|* *{**\[*TYPE p*\]* DECIMALS dec*}*
              *|* *{*TYPE HANDLE handle*}* *\]* *}*
  *|* *{* *{*TYPE name*}*
    *|* *{**\[*TYPE name*\]* DECIMALS dec*}* *}* *\]*
  *\[*RANGE range*\]*.

Effect

Assigns a memory area to a field symbol <fs>.

Additions

Specifies the memory area:

-   [dobj*\[*+off*\]**\[*(len)*\]*](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) - Data object dobj or its subarea off(len).
    
-   [(name)](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) - Data object contained in name.
    
-   [TABLE FIELD](javascript:call_link\('abapassign_table_field.htm'\)) - Obsolete: Restricts the search for the data object (contained in name) to [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") declared using the TABLES statement.
    
-   [dref->\*](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) - De-referenced reference variable.
    
-   [dobj INCREMENT inc](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) - Area that is incremented inc times by the length of dobj.
    
-   [COMPONENT comp OF STRUCTURE struct](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) - Component comp of a structure struc.
    
-   [oref->(attr\_name)](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) - Attribute of an object referenced by oref, specified in attr\_name.
    
-   [class*|*(class\_name)=>attr*|*(attr\_name)](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) - [Static attribute](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") attr of the class class, where the attribute and class can also be specified as the content of attr\_name and class\_name.
    
-   [writable\_exp](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) - [Writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry").
    

Specifies the data type:

-   [CASTING](javascript:call_link\('abapassign_casting.htm'\))
    Specifies the data type used to handle the memory area:
    [TYPE type*|*(name)](javascript:call_link\('abapassign_casting.htm'\)) - Data type type, which can also be specified as the content of name.
    [LIKE dobj](javascript:call_link\('abapassign_casting.htm'\)) - Data type of data object dobj.
    [*\[*TYPE p*\]* DECIMALS dec](javascript:call_link\('abapassign_casting.htm'\)) - Data type p, with [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") specified in dec.
    [TYPE HANDLE handle](javascript:call_link\('abapassign_casting.htm'\)) - Data type described by the [type description object](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry") of [RTTS](javascript:call_link\('abenrtts_glosry.htm'\) "Glossary Entry") that handle points to.
    
-   [*\[*TYPE name*\]* DECIMALS dec](javascript:call_link\('abapassign_casting_obsolete.htm'\))
    Obsolete: [Casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") to an elementary ABAP type in name or to the decimal places in dec.
    

Restricts the memory area:

-   [RANGE range](javascript:call_link\('abapassign_range.htm'\))
    Restricts the assignable memory area to the data object range.