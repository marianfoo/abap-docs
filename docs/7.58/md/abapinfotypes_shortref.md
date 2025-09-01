  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  I

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INFOTYPES%2C%20ABAPINFOTYPES_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INFOTYPES - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinfotypes.htm)

Syntax

INFOTYPES nnnn *\[*NAME name*\]*
               *\[*OCCURS n*\]*
               *\[*MODE N*\]*
               *\[*VALID FROM intlim1 TO intlim2*\]*
               *\[*AS PERSON TABLE*\]*.

Effect

Special Statement:
Creates an internal table with the name pnnnn for an infotype of the SAP ERP component HR.

Additions   

-   nnnn
    Four-digit, numeric key of an info type.
-   NAME name
    Defines the name of the internal table as name.
-   OCCURS n
    Defines the initial memory usage of the internal table.
-   MODE N
    Prevents linking to special [logical databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
-   VALID FROM intlim1 TO intlim2
    Creates the columns intlim1 and intlim2 for the obsolete abbreviated form of [PROVIDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide_obsolete.htm) as interval limits.
-   AS PERSON TABLE
    Creates the name of the internal table as ppnnnn.