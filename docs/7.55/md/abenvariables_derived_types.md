  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Variables with Derived Types

\* Work in progress \*

Syntax

TYPES dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
      entity\_name.
DATA dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
     entity\_name.
CREATE DATA dref TYPE TABLE FOR
              CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
              MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
              ACTION
            entity\_name.

Effect

In the case of modularization, it may be necessary to declare variables with derived types outside the reserved handler methods too. For this purpose, a special syntax in the form TYPE TABLE FOR is provided, which is supported in the statements TYPES, DATA and CREATE DATA.

It is not possible to use an alias to reference the entity here, only the entity\_name. This is because, unlike in handler methods, no reference to a specific behavior definition is given.

Data objects with derived type can also be created dynamically, preferably using the method CL\_ABAP\_BEHVDESCR=>CREATE\_DATA( ). The way the objects are created is based on absolute types. If preferred, these types can be constructed manually and instantiated using CREATE DATA dref TYPE (name).

The absolute name starts with \\BDEF=, followed by bdef\_name (the name of the behavior definition). This is usually followed by \\ENTITY=entity\_name and a specified operation. The schema for all derived types is as follows:

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=CREATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=UPDATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=DELETE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=LOCK
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED\_LATE

For the operation READ IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_I

For the operation READ RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_R

For the operation ACTION IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=IMPORTING

For the operation ACTION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=RETURNING

For the operation read-by-association IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_I

For the operation read-by-association RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_R

For the operation read-by-association LINK:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=LINK

For the operation create-by-association:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=CREATE

For response structures:
\\BDEF=bdef\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\TYPE=REPORTED\_LATE

Example

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES it\_item\_c         TYPE TABLE FOR CREATE sales\_order\_item.
    DATA  it\_root\_u         TYPE TABLE FOR UPDATE sales\_order.
    CREATE DATA rt\_item\_ri  TYPE TABLE FOR READ IMPORT
                sales\_order\_item.
    DATA et\_item\_rr    TYPE TABLE FOR READ RESULT sales\_order\_item
    TYPES et\_root\_f    TYPE TABLE FOR FAILED sales\_order.
    TYPES it\_root\_l    TYPE TABLE FOR LOCK sales\_order.
    TYPES it\_item\_a\_in     TYPE TABLE FOR ACTION IMPORT
          sales\_order\_item~add\_supplement.
    DATA et\_root\_a\_out     TYPE TABLE FOR ACTION RESULT
         sales\_order~set\_final\_status.
    CREATE DATA rt\_ri\_items TYPE TABLE FOR READ IMPORT
           sales\_order\\\_items.
    DATA lt\_rr\_items        TYPE TABLE FOR READ RESULT
         sales\_order\\\_items.
    DATA lt\_rl\_items    TYPE TABLE FOR READ LINK sales\_order\\\_items.
    ...
ENDCLASS.