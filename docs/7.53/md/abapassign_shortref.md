  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  A

ASSIGN - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm)

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

-   [dobj*\[*+off*\]**\[*(len)*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_static_dobj.htm) - Data object dobj or its subarea off(len).
    
-   [(name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_dobj.htm) - Data object contained in name.
    
-   [TABLE FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_table_field.htm) - Obsolete: Restricts the search for the data object (contained in name) to [interface work areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using the TABLES statement.
    
-   [dref->\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_dobj.htm) - De-referenced reference variable.
    
-   [dobj INCREMENT inc](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_dobj.htm) - Area that is incremented inc times by the length of dobj.
    
-   [COMPONENT comp OF STRUCTURE struct](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_dobj.htm) - Component comp of a structure struc.
    
-   [oref->(attr\_name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_access.htm) - Attribute of an object referenced by oref, specified in attr\_name.
    
-   [class*|*(class\_name)=>attr*|*(attr\_name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_dynamic_access.htm) - [Static attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") attr of the class class, where the attribute and class can also be specified as the content of attr\_name and class\_name.
    
-   [writable\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_writable_exp.htm) - [Writable expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry").
    

Specifies the data type:

-   [CASTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm)
    Specifies the data type used to handle the memory area:
    [TYPE type*|*(name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) - Data type type, which can also be specified as the content of name.
    [LIKE dobj](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) - Data type of data object dobj.
    [*\[*TYPE p*\]* DECIMALS dec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) - Data type p, with [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry") specified in dec.
    [TYPE HANDLE handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) - Data type described by the [type description object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_object_glosry.htm "Glossary Entry") of [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") that handle points to.
    
-   [*\[*TYPE name*\]* DECIMALS dec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting_obsolete.htm)
    Obsolete: [Casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencast_casting_glosry.htm "Glossary Entry") to an elementary ABAP type in name or to the decimal places in dec.
    

Restricts the memory area:

-   [RANGE range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_range.htm)
    Restricts the assignable memory area to the data object range.