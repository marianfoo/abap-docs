  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions.htm) →  [regex - Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_syntax.htm) →  [regex - PCRE Syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20Parsing%20with%20PCRE%20Regular%20Expression%2C%20ABENPCRE_PARSING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

regex - Parsing with PCRE Regular Expression

The example demonstrates how to use a PCRE regular expression to parse a syntax.

Source Code   

\* Public class definition
CLASS cl\_demo\_pcre\_parsing DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
INCLUDE demo\_pcre\_parsing\_helper\_def.
INCLUDE demo\_pcre\_parsing\_helper\_impl.
CLASS ast\_builder DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_abap\_matcher\_callout.
    METHODS:
    constructor,
    get\_root
    RETURNING VALUE(root) TYPE REF TO ast\_node.
  PRIVATE SECTION.
    DATA: m\_stack TYPE REF TO node\_stack.
ENDCLASS.
CLASS ast\_builder IMPLEMENTATION.
  METHOD constructor.
    m\_stack = NEW node\_stack( ).
  ENDMETHOD.
  METHOD if\_abap\_matcher\_callout~callout.
    DATA: kind TYPE string,
    child TYPE REF TO ast\_node,
    cond\_child TYPE REF TO ast\_node,
    then\_child TYPE REF TO ast\_node,
    else\_child TYPE REF TO ast\_node,
    node TYPE REF TO ast\_node.
    kind = callout\_string.
    CASE kind.
      WHEN \`true\` OR \`false\` OR \`zero\` OR \`one\`.
        "nodes without children
        m\_stack->push( NEW ast\_node( kind ) ).
      WHEN \`succ\` OR \`pred\` OR \`iszero\`.
        "nodes with a single child node
        child = m\_stack->pop( ).
        node = NEW ast\_node( kind ).
        node->append( child ).
        m\_stack->push( node ).
      WHEN \`if\`.
        "node(s) with three child nodes;
        "child notes have to be popped
        "off the stack in reverse order
        else\_child = m\_stack->pop( ).
        then\_child = m\_stack->pop( ).
        cond\_child = m\_stack->pop( ).
        node = NEW ast\_node( kind ).
        node->append( cond\_child ).
        node->append( then\_child ).
        node->append( else\_child ).
        m\_stack->push( node ).
      WHEN OTHERS.
        "should not happen
    ENDCASE.
  ENDMETHOD.
  METHOD get\_root.
    root = m\_stack->pop( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_pcre\_parsing IMPLEMENTATION.
  METHOD main.
    DATA(input) =
      \`succ( if true then 1 else iszero( if false then 0 else 1 ) )\`.
    cl\_demo\_input=>new(
     )->add\_text( \`Enter something in the following syntax:\`
     )->add\_text( \`t ::= true | false | 0 | 1 | if t then t \` &&
                  \`else t | succ( t ) | pred( t ) | iszero( t )\`
     )->request( CHANGING field = input ).
    "The regex contains named subroutine definitions (?<name> ...)
    "that call each other recursively
    "and contains callouts (?C"...")
    "to trigger construction of the AST nodes
    FINAL(regex) = cl\_abap\_regex=>create\_pcre(
    pattern =
         \`(?(DEFINE)\`
      && \`  (?<t\_true>true(?C"true"))\`
      && \`  (?<t\_false>false(?C"false"))\`
      && \`  (?<t\_zero>0(?C"zero"))\`
      && \`  (?<t\_one>1(?C"one"))\`
      && \`  (?<n\_if>if\\s+(?&n\_t)\\s+then\\s+(?&n\_t)\\s+else\` &
            \`\\s+(?&n\_t)(?C"if"))\`
      && \`  (?<n\_succ>succ\\s\*\\(\\s\*(?&n\_t)\\s\*\\)(?C"succ"))\`
      && \`  (?<n\_pred>pred\\s\*\\(\\s\*(?&n\_t)\\s\*\\)(?C"pred"))\`
      && \`  (?<n\_iszero>iszero\\s\*\\(\\s\*(?&n\_t)\\s\*\\)(?C"iszero"))\`
      && \`  (?<n\_t>(?&t\_true)|(?&t\_false)|(?&t\_zero)|(?&t\_one)|\` &
            \`(?&n\_if)|(?&n\_succ)|(?&n\_pred)|(?&n\_iszero))\`
      && \`)\`
      && \`^\\s\*(?&n\_t)\\s\*$\` ).
    FINAL(matcher) = regex->create\_matcher( text = input ).
    FINAL(builder) = NEW ast\_builder( ).
    matcher->set\_callout( builder ).
    IF matcher->match( ).
      out->write\_text(
        builder->get\_root( )->to\_string( ) ).
    ELSE.
      out->write\_text(
        \`The given input cannot be parsed\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Advanced example for using [PCRE syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax.htm) for regular expressions. Using subroutines defined with [(?<name> ...)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax_specials.htm) and callouts with [(?C"...")](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_pcre_syntax_specials.htm), an abstract syntax tree (AST) is generated from an input if it follows the example's syntax rules.